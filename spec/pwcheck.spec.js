var pword = require("../password-checker");
var validator = pword.pwdval;
var checker = pword.pwok;

describe("password validation", function() {
  it("should not allow an empty password", function() {
    expect(function() {
      validator("").toThrow(
        new Error(
          "The password should contain at least one uppercase, one lowercase, a numeric character and be 9 characters or longer"
        )
      );
    });
  });
  it("should ensure the presence of an uppercase character", function() {
    expect(function() {
      validator("askakaka").toThrow(
        new Error(
          "The password should contain at least one uppercase, one lowercase, a numeric character and be 9 characters or longer"
        )
      );
    });
  });
  it("should ensure the presence of an lowercase character", function() {
    expect(function() {
      validator("KSKSKSKSKKSKSKS").toThrow(
        new Error(
          "The password should contain at least one uppercase, one lowercase, a numeric character and be 9 characters or longer"
        )
      );
    });
  });
  it("should ensure the presence of an numeric character", function() {
    expect(function() {
      validator("KSKrgSKSKKSKSKS").toThrow(
        new Error(
          "The password should contain at least one uppercase, one lowercase, a numeric character and be 9 characters or longer"
        )
      );
    });
  });
  it("should ensure that the password's length is above 8 characters", function() {
    expect(function() {
      validator("hello").toThrow(
        new Error(
          "The password should contain at least one uppercase, one lowercase, a numeric character and be 9 characters or longer"
        )
      );
    });
  });
});

describe("checking if the password is ok", function() {
  it("should return a true for a combination of three criterion passed", function() {
    expect(function() {
      checker("hello1H").toBe("true");
      checker("AAAAAAAAAA99999").toEqual("true");
      checker("aaaaa9a9a9a9a9a").toBe("true");
      checker("AAAAAAAAAA99999").toBe("true");
    });
  });
  it("should return false if the password is empty or smalller than 9 characters", function() {
    expect(function() {
      checker("hello").toBe("false");
      checker("").toBe("false");
    });
  });
});
