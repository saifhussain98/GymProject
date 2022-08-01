Coverage: 96.9%
# Software Core Practical Project: GymProject

For this project, I have chosen to build my application on a gym workouts database which allows the user to create, read, update and delete entries of workouts from the front-end that is connected to a local database in MySQL. 

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

Required softwares:
-Bash Terminal / Terminal (Command-Line Interface / Connection to Github) - https://git-scm.com/downloads

-Jira (Atlassian Website for project planning) - [https://www.atlassian.com/](https://www.atlassian.com/try/cloud/signup?bundle=jira-software&edition=free)

-MySQL WorkBench (Database) - https://dev.mysql.com/downloads/windows/installer/8.0.html

-Java (Coding Language) - https://www.oracle.com/uk/java/technologies/javase-downloads.html

-Eclipse (Code Editor) - http://www.eclipse.org/downloads

-Visual Studio Code (Code Editor for HTML and Programming Language; Java and JS) - https://code.visualstudio.com/

-Maven (Build Tool / Manages dependencies) - https://maven.apache.org/download.cgi

-SpringBoot (Backend Application) - https://spring.io/tools

-Postman (Testing HTTP Requests) - https://www.postman.com/downloads/

-H2 Console  (Remote Database) - http://localhost:8080/h2-console/

-HTML/Live Server (Webpage Development) - Live Server is found in the extensions section of Visual Studio Code.

-CSS/Bootstrap (Front-end Styling) - https://getbootstrap.com/

-JavaScript (Coding Functionality for Front-End)

### Installation

Postman Installation

Download Postman from this link https://www.postman.com/downloads/:

![image](https://user-images.githubusercontent.com/105277308/181711319-ca1d9398-bac1-432c-9a30-d62c70054ae7.png)

Open the link and run Postman and you should see the following output:

![image](https://user-images.githubusercontent.com/105277308/181711425-188587c3-fd8f-4fff-9237-ff8f8b03294b.png)

How to use Postman:

Postman works by sending HTTP requests to an end-point.
In order to test the application, ensure that Spring is running or you have got a end-point to test, i.e. a fake placeholder

1. Click "create a request" on postman

2. Specify the type of request you're looking for i.e. GET/POST/DELETE

3. Enter the URL you're looking to get information from - this would either be your localhost or an external URL

![image](https://user-images.githubusercontent.com/105277308/181711988-ce4bb399-4dd7-4981-afa2-d80cac522068.png)

4. Press 'send' and observe the output

![image](https://user-images.githubusercontent.com/105277308/181712105-6c084c42-1149-48b8-93ad-811259989a78.png)


## Running the tests
The testing is carried out via JUnit and MockMVC. This covers the functionality of the API. To run the test, right click on the project and select coverage, then the second option JUnit test.

![image](https://user-images.githubusercontent.com/105277308/181773614-35275162-62a8-4a87-a54e-8c78959504da.png)

## Deployment
1. Clone the repository to your local device.
![image](https://user-images.githubusercontent.com/105277308/181775633-c0de4b97-a6e0-4040-9fcd-cbfe966f2c7d.png)

2. Open eclipse on your device and select; "File: > "Open projects from file system" > select the folder cloned "GymProject".
![image](https://user-images.githubusercontent.com/105277308/181772093-f32ff241-0403-4564-9163-3593ec5ed7f2.png)
![image](https://user-images.githubusercontent.com/105277308/181776000-59b3b31f-969a-4460-9439-58aff6de82ea.png)

3. Change the application-prod.properties to create (You will need to edit the url, username and password accordingly).
![image](https://user-images.githubusercontent.com/105277308/181776116-ac3e4007-fe4e-4998-801b-747eae2ac1bd.png)

4. Run the project as spring-boot project and upon completion change "create" back to "validate".
![image](https://user-images.githubusercontent.com/105277308/181772320-e34ddd1c-cd0f-4d93-9b2c-955958190c1f.png)
![image](https://user-images.githubusercontent.com/105277308/181776214-b8a033b2-0fbb-4e84-8bbe-29a94adc988a.png)

5. Connect the MySQL local instance by selecting "connect database".
6. Open the GUI via Visual Studio Code live server plugin.
![image](https://user-images.githubusercontent.com/105277308/181772481-a2948ef8-f793-4a57-83bc-752d66e8ddb9.png)

7. You can now interact with the application!
![image](https://user-images.githubusercontent.com/105277308/181772556-442712d9-c060-434e-9217-1c7bb116b160.png)

To make sure the database is holding the data, open the table in MySQL and the data entries should be collected.
![image](https://user-images.githubusercontent.com/105277308/181776804-d4599939-79d0-4e9e-9191-406f0ef90581.png)

## Built With

* [Maven](https://maven.apache.org/) - Dependency Management
* [Spring](https://spring.io/tools) - Backend Application

## Versioning

We use [Github](https://github.com/) for versioning.

## Jira Board
https://saif-hussain.atlassian.net/jira/software/projects/GYM/boards/2

## Authors

* **Saiful Hussain** - *Gym Workout Project* - [saifulhussain](https://github.com/saifhussain98)

## License

MIT License

Copyright (c) [2022] [Saiful Hussain]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Acknowledgments
* **Jordan Benbelaid** - *Shout out to Jordan B for teaching us how to code for Backend and being a legend*
* **Jordan Harrison** - *Shout out to Jordan H for teaching us how to code for Frontend and being a Top Knotch Geeza*
* **Shantanu** - *Taught me everything I know*
