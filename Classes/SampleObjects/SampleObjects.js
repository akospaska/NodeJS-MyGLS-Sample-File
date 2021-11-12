const SubActions = require('../SubActions/SubActions');

const subActions = new SubActions();

class SampleObjects {
  getPrintLabelsSampleObject(userName, password, clientNumber) {
    //the object for send by printlabels and preparelabels are same
    return {
      ClientNumberList: [],
      Password: subActions.passwordToEncryptedDecimal(password),
      Username: userName,
      ParcelList: [
        {
          CODAmount: 25000,
          CODCurrency: '',
          CODReference: 'COD Reference',
          ClientNumber: clientNumber,
          ClientReference: 'ClientReference',
          Content: 'Content',
          Count: 1,
          DeliveryAddress: {
            City: 'Budapest',
            ContactEmail: 'example@gmail.com',
            ContactName: `Recipment's name`,
            ContactPhone: '+36200000000',
            CountryIsoCode: 'HU',
            HouseNumber: '15',
            HouseNumberInfo: 'Other informations',
            Name: `Recipment's name`,
            Street: 'street name',
            ZipCode: 1010,
          },
          ParcelNumber: null,
          PickupAddress: {
            City: 'kecskemét',
            ContactEmail: 'example@gmail.com',
            ContactName: `Sender's name`,
            ContactPhone: '+36202222222',
            CountryIsoCode: 'HU',
            HouseNumber: '10',
            HouseNumberInfo: 'Other infos',
            Name: `Sender's name`,
            Street: 'street name',
            ZipCode: '6000',
          },
          PickupDate: null,
          ServiceList: [],
        },
      ],
      PrintPosition: 0,
      ShowPrintDialog: false,
      TypeOfPrinter: '',
    };
  }
  //503493=>503545
  getGetPrintedLabelsSampleObject(userName, password, parcelIdArray) {
    return {
      ClientNumberList: [],
      Password: subActions.passwordToEncryptedDecimal(password),
      Username: userName,
      ParcelIdList: parcelIdArray,
      PrintPosition: 0,
      ShowPrintDialog: false,
      TypeOfPrinter: '',
    };
  }
  getDeleteLabelsSampleObject(userName, password, parcelIdArray) {
    return {
      ClientNumberList: [],
      Password: subActions.passwordToEncryptedDecimal(password),
      Username: userName,
      ParcelIdList: parcelIdArray,
    };
  }
  getGetParcelStatusesSampleObject(userName, password, parcelId) {
    return {
      ClientNumberList: [],
      Password: subActions.passwordToEncryptedDecimal(password),
      Username: userName,
      LanguageIsoCode: 'hu',
      ParcelNumber: parcelId,
      ReturnPOD: false,
    };
  }
}

module.exports = SampleObjects;
