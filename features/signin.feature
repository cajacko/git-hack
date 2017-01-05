Feature: Sign In
  When a user starts the application, the user will be prompted to enter
  her username and password into a form and then submit the form. The
  user's credentials will be validated. If successful, the user will be
  granted access to the application.

  Scenario: Successful sign in
    This scenario will test a successful sign in using a valid username
    and password.

    Given the application is running
    When I enter my credentials into the sign in form
    Then I will be granted access to the application