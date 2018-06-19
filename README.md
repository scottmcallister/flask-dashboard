# dashboard

A flask app with user authentication that allows users to log in to a dashboard. Not sure what the dashboard is going to be for or what it's going to do yet. 

## installation

First, make sure you have `Python 3` and `virtualenv` installed on your machine. After cloning this repository, navigate to the root directory of the project in a terminal and run these commands:

```
virtualenv -p python3 env
source env/bin/activate
pip install -r requirements.txt
export FLASK_APP=main.py
export SECRET_KEY=<your-key>
```

This will create a virtual environment, activate that virtual environment, install the project's dependencies, and set some environment variables for the app's main file. Note that you'll need to replace `<your-key>` in the last command. Once all of these steps have completed, you can start the app using `flask run`.
