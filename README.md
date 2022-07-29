Coverage: 62.1%

# GymProject

This project was created to run an inventory management system with CRUD functionality for Customers, Items, Orders and Order Items.

## Getting Started

The following instructions will help you get the project on you rlocal system for your own developemt and testing purposes. For a live demo please see the deployment section.

### Prerequisites
First Install Java (version 14 or above upto version 17 (I used java 17)) along with SQL which is a relational database. Secondly install an IDE that is compatble with Java (we used Eclipse for this project). We then installed Maven as our build automation tool.

### Installing

To install this project, we forked the link to download the project files from GitHub then imported it into eclipse to gain access to the files of the project. Before using Eclipse we first created our Items, Orders and Order Items tables on SQl (Customers was already there for us). We then reated our Domain, DAO and Controller classes. To run/demo the project from the eclipse console you must access the runner class and click "run as" and accept it to be open as a Java application. Here you can perform CRUD functions (create, read, update and delete) customer, items, orders and order items on the terminal and repeat until finished.


[Demo.pdf](https://github.com/saifhussain98/IMS-22EnableMay2/files/8886716/Demo.pdf)


## Running the tests

To run the individual tests right click over the indivdual test file you want to test and click "Run as" and then run under the option of JUnit test. To find the coverage of the entire project rihgt click over the entire IMS project folder and select "coverage as" and then click the second option of JUnit test. You can then click on the coverage tab on the bottom of the screen next to the console and terminal tabs and there you will find your overall project test coverage percentages.

### Unit Tests 

The unit tests covered the Domain and DAO classes testing the functionality of CRUD fucntions in the customer, item, order and order items classes.

### Integration Tests 

The Mockito tests tested the ability of the controller classes to be able to get the information from the Domain and DAO classes whislt also testing the functionality of the Controller classes.

[How to run coverage Test.pdf](https://github.com/saifhussain98/IMS-22EnableMay2/files/8886792/How.to.run.coverage.Test.pdf)


## Deployment

Run the Jar file in the target folder to run the application from any CLI.

## Built With

* [Maven](https://maven.apache.org/) - Dependency Management

## Versioning

We use Github for versioning (https://github.com). 

## Authors

* **Chris Perrins** - *Initial work* - [christophperrins](https://github.com/christophperrins)

## License

This project is licensed under the MIT license - see the [LICENSE.md](LICENSE.md) file for details 

*For help in [Choosing a license](https://choosealicense.com/)*

## Acknowledgments

* Hat tip to anyone whose code was used!
* God
* My parents
* Jordan Benbelaid because he is my hero
