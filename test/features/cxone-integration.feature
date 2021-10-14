Feature: Default

	Background:
		#@STX-7652
		Given a user is logged into CXone
		

	
	@STX-7650
	Scenario: An option to start CXone Studio should be displayed on the CXone Application Menu
		When the user opens the CXone Application Menu
		Then the option to start CXone Studio is displayed on the Application Menu