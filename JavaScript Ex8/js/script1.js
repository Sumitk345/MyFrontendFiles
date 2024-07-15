var user = {
    profile:{
        firstname:"arun",
        lastname:"patel",
        username:"arun167"
    },
    blog:{
        web:{
            google:"https://blogspot.google.com/arun9",
            wiki:"https://wikihow.com/arun55"
        },

        mobile:{
            insta:"https://insta.com/arun24",
            fb:"https://facebook.com/arun38"
        }
    }
};

//Q1. console log username in uppercase 
console.log(user.profile.username.toUpperCase());

//Q2. console.log keys of blog object
console.log(Object.keys(user.blog));

//Q3. delete insta from "mobile" object
delete user.blog.mobile.insta;
console.log(user);

//Q4. add location:"INDIA" in profile object
user.profile.location = "INDIA";
console.log(user.profile);

//Q5. check whether google blog contains substring "arun" or not?
console.log(user.blog.web.google.includes("arun"));


