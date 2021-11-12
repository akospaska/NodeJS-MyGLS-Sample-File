const express = require('express');
const app = express();

const myglsApiendpoints = require('./Classes/MyglsApiMethods/MyglsMethods');
const MyglsApiEndpoints = new myglsApiendpoints();

//Comment out the method what you would like to use.

//METHODS AND ENDPOINTS //
//Create the ParcelLabel
MyglsApiEndpoints.printLabels();

//Prepare the parcelData
//MyglsApiEndpoints.prepareLabels();

//Print the prepared parcelId's
//MyglsApiEndpoints.getPrintedLabels(['503495']);

//Delete parcels
//MyglsApiEndpoints.deleteLabels(['1']);

//Get a parcel's statuses
//MyglsApiEndpoints.getParcelStatuses('152545');

app.use(express.json());
