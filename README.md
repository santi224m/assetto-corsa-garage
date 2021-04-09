<p align="center">
  <img src="https://i.imgur.com/N7r9Zsu.png" width="150" />
</p>

Assetto Corsa Garage was created to make it easier for sim racers to find the mods they are looking for. The sim racing community has a lot of mods that users can download, but they are spread all over the internet. And even when mods are on the same site, it can be hard to look through all of them because there is no way of filtering them. Assetto Corsa Garage fixes this by requiring every mod to be uploaded with the same information including: brand, car class, model year, and shifter type. Assetto Corsa Garage doesn't host the mods on the app, but it contains links to the mods on other sites. This app allows sim racers to contribute to the site by allowing them to link their favorite mods for other sim racers to find. This ensures that the newest mods will always be on the site.

## Contribution
If you would like to contribute to the site, feel free to work on one of the issues and make a pull request. Developers of all skill levels are welcome to contribute. If you need help getting the app to run on your local machine follow the steps below.

## Fork this repository
![Annotation 2021-04-08 200857](https://user-images.githubusercontent.com/36117697/114123098-7af80600-98a6-11eb-8d0b-9008c69f7246.png)

Fork the repository to add a copy of this repository to your account.

## Clone the repository
![Annotation 2021-04-08 170640](https://user-images.githubusercontent.com/36117697/114110663-f1880a00-988c-11eb-921f-094532cca700.png)

Now head to your copy of the repository and clone the forked repository to your machine. Click the green "Code" button and copy the url. You will use this url in the following command on your terminal. The "this-is-you" part should be replaced with your github username.

```
git clone https://github.com/this-is-you/assettoCorsaGarage.git
```

## Create a branch
Change your directory to the newly cloned repository

```
cd assettoCorsaGarage
```

Create a new branch

```
git checkout -b new-branch-name
```

## Add Firebase API keys

#### Create Firebase account
Before you can run the app, create a [firebase](https://firebase.google.com) account so that you can run a development database.

Once you get the api keys from firebase, you can move on to the next step.

![Annotation-2021-04-08-201831](https://user-images.githubusercontent.com/36117697/114123890-1b025f00-98a8-11eb-99ba-cd9bb4709362.png)

#### Add api key to config file
Create a "dev.js" file in the "src/config" directory.

![image](https://user-images.githubusercontent.com/36117697/114113479-8db50f80-9893-11eb-9b32-c369126734ff.png)

Copy the following code into your "dev.js" file

```
module.exports = {
    firebaseApiKey: 'your-key',
    firebaseAuthDomain: 'your-key',
    firebaseProjectId: 'your-key',
    firebaseStorageBucket: 'your-key',
    firebaseMessagingSenderId: 'your-key',
    firebaseAppId: 'your-key',
    firebaseMeasurementId: 'your-key',
    firebaseDatabaseURL: 'your-key',
    adminId: 'your-key',
};
```

Replace the "your-key" strings with the corresponding key and save the document.

#### Import JSON file to your firebase
You can download the following JSON file and import it into your firebase realtime database so that you don't have to mannualy upload mods to your development database.

[Download Firebase JSON](https://raw.githubusercontent.com/santi224m/asg-json/main/assettocorsagarage-default-rtdb-export.json)

![Annotation-2021-04-08-203821](https://user-images.githubusercontent.com/36117697/114125272-f3f95c80-98aa-11eb-97a4-954bf6a5e5af.png)

## Install Dependencies
Install the dependencies before you run the app

```
npm install
```

Sometimes the "react-scripts" file won't install so run the following command:

```
npm install react-scripts --save
```

Now you can start the app

```
npm start
```

If this is your first time using your firebase database, then you will have no mods. Sign in and upload a couple test mods in ``` http://localhost:3000/newmod/form ``` .

## Make changes and commit

Now you can make the changes in the code and when you are done, commit the changes.

```
git add file-changed-1 file-changed-2
```
or to commit all files changed
```
git add .
```

Now that you added the files you changed you can commit them

```
git commit -m "Description of your commit"
```
## Push changes to GitHub
Now that you commited your changes to git, you can push them to GitHub.

```
git push origin <add-your-branch-name>
```
## Make a pull request
Now that you pushed your changes to GitHub, you can make a pull request for your code to be reviewed and hopefully merged.

<img src="https://user-images.githubusercontent.com/36117697/114111891-fa2e0f80-988f-11eb-8f5c-08a50a4b7b5b.png" width="650" />

You can add a comment describing what you changed and then click "Create pull request".

<img src="https://user-images.githubusercontent.com/36117697/114111989-36617000-9890-11eb-88b1-67d2e9fc7ea8.png" width="650" />

Now all you have to do is wait for your code to be reviewed and will you recieve a notification once it is merged or if additional changes need to be made.
