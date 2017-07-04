/**
 * Ing_UpdatePaymentTransaction.ds
 * To update order payment intrument with the latest ING transaction details
 *
 */

/* API includes */
var ServiceRegistry = require('dw/svc/ServiceRegistry');
var Transaction = require('dw/system/Transaction');
var Site = require('dw/system/Site');

function UpdatePaymentInfo(dwOrder, paymentInstrument)
{
  var pi = paymentInstrument;
  var retrieveSvc = ServiceRegistry.get('Ingenico_Retrieve');
  var params = new Object(); // you must use literal decalaration, ex var params = {} or var Params = new Object();
  params.paymentID = pi.paymentTransaction.transactionID;
  var result = retrieveSvc.call(params);
  if(result.ok)
  {
    var approveResp = JSON.parse(result.object.text); // prevent result.object for been null or undefined
    Transaction.wrap(function () {
      pi.paymentTransaction.custom.ING_status = approveResp.status;
      pi.paymentTransaction.custom.ING_authorisationCode = approveResp.paymentOutput.cardPaymentMethodSpecificOutput.authorisationCode;
      pi.paymentTransaction.custom.ING_statusCategory = approveResp.statusOutput.statusCategory;
      pi.paymentTransaction.custom.ING_statusCode = approveResp.statusOutput.statusCode;
      dwOrder.custom.ING_status = approveResp.status;
      if('isAuthorized' in approveResp.statusOutput)
      {
        dwOrder.custom.ING_isAuthorized = approveResp.statusOutput.isAuthorized;
      }
      dwOrder.custom.ING_isRefundable = approveResp.statusOutput.isRefundable;
      dwOrder.custom.ING_isCancellable = approveResp.statusOutput.isCancellable;
      //save transaction details in order custom attr
      if(Site.current.getCustomPreferenceValue('ING_enableTransLogs'))
      {
        var orderTransactions = dwOrder.custom.ING_TransactionHistory.slice();
        var authSpecificData = {};
        authSpecificData.transactionDate = (new Date()).toUTCString();
        authSpecificData.IngenicoAmount = approveResp.paymentOutput.amountOfMoney.amount;
        authSpecificData.status = approveResp.status;
        authSpecificData.statusCode =approveResp.statusOutput.statusCode;
        authSpecificData.statusCategory = approveResp.statusOutput.statusCategory;
        authSpecificData.authCode = approveResp.paymentOutput.cardPaymentMethodSpecificOutput.authorisationCode;
        orderTransactions.push(JSON.stringify(authSpecificData));
        dwOrder.custom.ING_TransactionHistory = orderTransactions;
      }
    });

  }else
  {
    if(Site.current.getCustomPreferenceValue('ING_enableTransLogs'))
    {
      //save transaction details in order custom attr
      var orderTransactions = dwOrder.custom.ING_TransactionHistory.slice();
      Transaction.wrap(function () {
        var authSpecificData = {};
        authSpecificData.transactionDate = (new Date()).toUTCString();
        authSpecificData.errorResult = JSON.parse(result.errorMessage);
        orderTransactions.push(JSON.stringify(authSpecificData));
        dwOrder.custom.ING_TransactionHistory = orderTransactions;
      });
    }
  }
}

/*
 * Local methods
 */
exports.UpdatePaymentInfo = UpdatePaymentInfo;