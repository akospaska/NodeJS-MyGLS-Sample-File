class GetAuthenticationDetails {
  getUsername() {
    return 'your_mygls_account';
  }
  getPassword() {
    return 'your_mygls_account_password';
  }
  getClientNumber() {
    return 100000004;
  }
  getTargetServer() {
    return 'test'; // "prd" == PRD
  }
  getCountry() {
    return 'HU'; // "SK", "HR", "SI","CZ",RO
  }
}

module.exports = GetAuthenticationDetails;
