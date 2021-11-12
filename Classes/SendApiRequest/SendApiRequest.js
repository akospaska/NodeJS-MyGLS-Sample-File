const axios = require('axios');
const GetAuthenticationDetails = require('../GetAuthenticationDetails/GetAuthenticationDetails');

const accDetails = new GetAuthenticationDetails();

class SendApiRequest {
  async sendGlsRequest(requestBody, method) {
    const data = requestBody;
    const helperUrlComponent = accDetails.targetServer == '' ? '' : '.';
    const config = {
      method: 'post',
      url: `https://api.${accDetails.getTargetServer()}${helperUrlComponent}mygls.${accDetails.getCountry()}/ParcelService.svc/json/${method}`,
      headers: {
        'Content-Type': 'application/json',
        Cookie: 'ASP.NET_SessionId=hbxjfukmnwilp1b1pyinvwfp',
      },
      data: data,
    };

    let dataresp;
    await axios(config)
      .then(function (response) {
        dataresp = response.data;
        console.log(response.data);
      })
      .catch(function (error) {
        dataresp = error;
      });
    return await dataresp;
  }
}
module.exports = SendApiRequest;
