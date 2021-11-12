const sendApiRequest = require('../SendApiRequest/SendApiRequest');
const filesystem = require('../FileSystem/FileSystem');

const samppleObjects = require('../SampleObjects/SampleObjects');
const GetAuthenticationDetails = require('../GetAuthenticationDetails/GetAuthenticationDetails');

const SampleObjects = new samppleObjects();
const SendApiRequest = new sendApiRequest();
const FileSystem = new filesystem();
const getAuthDetails = new GetAuthenticationDetails();

class MyglsApiMethods {
  async printLabels() {
    const response = await SendApiRequest.sendGlsRequest(
      SampleObjects.getPrintLabelsSampleObject(getAuthDetails.getUsername(), getAuthDetails.getPassword(), getAuthDetails.getClientNumber()),
      'printLabels'
    );
    try {
      FileSystem.createPDF(response.Labels);
    } catch {
      ('PDF creation is aborted!');
    }
  }
  prepareLabels() {
    SendApiRequest.sendGlsRequest(
      SampleObjects.getPrintLabelsSampleObject(getAuthDetails.getUsername(), getAuthDetails.getPassword(), getAuthDetails.getClientNumber()),
      'prepareLabels'
    );
  }

  async getPrintedLabels(parcelIdArray) {
    const response = await SendApiRequest.sendGlsRequest(
      SampleObjects.getGetPrintedLabelsSampleObject(getAuthDetails.getUsername(), getAuthDetails.getPassword(), parcelIdArray),
      'getPrintedLabels'
    );
    try {
      FileSystem.createPDF(response.Labels);
    } catch {
      ('PDF creation is aborted!');
    }
  }
  deleteLabels(parcelIdArray) {
    SendApiRequest.sendGlsRequest(
      SampleObjects.getDeleteLabelsSampleObject(getAuthDetails.getUsername(), getAuthDetails.getPassword(), parcelIdArray),
      'deleteLabels'
    );
  }
  getParcelStatuses(parcelId) {
    SendApiRequest.sendGlsRequest(
      SampleObjects.getGetParcelStatusesSampleObject(getAuthDetails.getUsername(), getAuthDetails.getPassword(), parcelId),
      'getParcelStatuses'
    );
  }
}

module.exports = MyglsApiMethods;
