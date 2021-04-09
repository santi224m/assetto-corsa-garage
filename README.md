# Assetto Corsa Garage
Assetto Corsa Garage was created to make it easier for sim racers to find the mods they are looking for. The sim racing community has a lot of mods that users can download, but they are spread all over the internet. And even when mods are on the same site, it can be hard to look through all of them because there is no way of filtering them. Assetto Corsa Garage fixes this by requiring every mod to be uploaded with the same information including: brand, car class, model year, and shifter type. Assetto Corsa Garage doesn't host the mods on the app, but it contains links to the mods on other sites. This app allows sim racers to contribute to the site by allowing them to link their favorite mods for other sim racers to find. This ensures that the newest mods will always be on the site.

## Run app on your local machine
If you would like to contribute to the site, make the changes on your local machine and then make a pull request.

## Fork this repository
![Annotation 2021-04-08 170334](https://user-images.githubusercontent.com/36117697/114110538-9b1acb80-988c-11eb-9b49-22899f13e453.png)

Fork the repository to add a copy of this repository to your account.

## Clone the repository
![Annotation 2021-04-08 170640](https://user-images.githubusercontent.com/36117697/114110663-f1880a00-988c-11eb-921f-094532cca700.png)

Clone the forked repository to your machine. Copy the url from the above image and use it in the following command on your terminal. The "this-is-you" part should be replaced with your github username.

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
- Replace with image
You add a comment describing what you changed and then click "Create pull request".
- Replace with image
Now all you have to do is wait for your code to be reviewed and will you recieve a notification once it is merged or if additional changes need to be made.
