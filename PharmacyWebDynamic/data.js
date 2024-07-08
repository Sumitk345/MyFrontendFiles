var medList = [
    {
        "Id": "1",
        "Name": "Tata 1mg Multivitamin Supreme, Zinc, Calcium and Vitamin D Immunity Booster Capsule",
        "Type": "Capsule",
        "description": "bottle of 60 capsules",
        "total ratings": "820 ratings",
        "average rating": "4.1",
        "price": "282.00",
        "mrp": "271.00"
    },
    {
        "Id": "2",
        "Name": "HealthVit Lgm 500mg  Capsule",
        "Type": "Capsule",
        "description": "bottle of 60 capsules",
        "total ratings": "No reviews",
        "average rating": "Nan",
        "price": "556.00",
        "mrp": "520.00"
    },
    {
        "Id": "3",
        "Name": "Zincovit Tablet",
        "Type": "Tablet",
        "description": "strip of 15 Tablet",
        "total ratings": "4433 ratings",
        "average rating": "4.5",
        "price": "709.00",
        "mrp": "671.00"
    },
    {
        "Id": "4",
        "Name": "Tata 1mg Vitamin B Complex Capsules",
        "Type": "Capsule",
        "description": "bottle of 60 capsules",
        "total ratings": "7 ratings",
        "average rating": "4.6",
        "price": "764.00",
        "mrp": "734.00"
    },
    {
        "Id": "5",
        "Name": "Shelcal 500 Tablet",
        "Type": "Tablet",
        "description": "strip of 15 Tablet",
        "total ratings": "4345 ratings",
        "average rating": "4.5",
        "price": "642.00",
        "mrp": "602.00"
    },
    {
        "Id": "6",
        "Name": "Swisse Ultiboost Co-Enzyme Q10 ",
        "Type": "Capsule",
        "description": "bottle of 50 capsules",
        "total ratings": "No reviews",
        "average rating": "Nan",
        "price": "348.00",
        "mrp": "341.00"
    },
    {
        "Id": "7",
        "Name": "Shelcal XT Tablet",
        "Type": "Tablet",
        "description": "strip of 15 Tablet",
        "total ratings": "772 ratings",
        "average rating": "4.5",
        "price": "655.00",
        "mrp": "609.00"
    },
    {
        "Id": "8",
        "Name": "HealthVit Inositol 650mg Capsule",
        "Type": "Capsule",
        "description": "bottle of 60 capsules",
        "total ratings": "No reviews",
        "average rating": "Nan",
        "price": "258.00",
        "mrp": "218.00"
    },
    {
        "Id": "9",
        "Name": "D-Rise 60K Capsule",
        "Type": "Capsule",
        "description": "strip of 4 soft gelatin capsules",
        "total ratings": "1506 ratings",
        "average rating": "4.5",
        "price": "343.00",
        "mrp": "307.00"
    },
    {
        "Id": "10",
        "Name": "Evion 400mg Capsule",
        "Type": "Capsule",
        "description": "strip of 10 capsules",
        "total ratings": "5882 ratings",
        "average rating": "4.5",
        "price": "692.00",
        "mrp": "657.00"
    },
    {
        "Id": "11",
        "Name": "TrueBasics Multivit Women Tablet",
        "Type": "Tablet",
        "description": "bottle of 90 Tablet",
        "total ratings": "17 ratings",
        "average rating": "4.2",
        "price": "570.00",
        "mrp": "565.00"
    },
    {
        "Id": "12",
        "Name": "HealthVit L-Glutathione Reduced 100mg Capsule",
        "Type": "Capsule",
        "description": "bottle of 60 capsules",
        "total ratings": "17 ratings",
        "average rating": "3.2",
        "price": "226.00",
        "mrp": "176.00"
    }
]

//Main Logic 1
// for (let index = 0; index < medList.length; index++) {
//       var div = document.createElement("div");
//       div.className = "flip-box";

//       div.innerHTML = ` 
//         <div class="flip-box-inner">
//             <div class="card">
//                 <img src="./img/img${index+1}.jpg" alt="" srcset="">
//                 <p id="medname">${medList[index].Name}</p>
//                 <hr id="hr">
//                 <p>
//                     <span id="span">$${medList[index].price}</span>
//                     <span> |</span>
//                     <span style="color: green;"> ${medList[index].mrp}</span>
//                 </p>
//                 <hr>
//                 <hr>
//                 <span style="margin-left: 20px;">Qtys</span>
//                 <input class="input" type="number" name="" id="">
//                 <a href="">Add to cart</a>
//             </div>
//             <div class="cardback">
//                 <h2>INFO</h2>
//                 <i class="fa-brands fa-square-facebook"></i>
//                 <i style="margin-left: 30px;" class="fa-brands fa-square-instagram"></i>
//                 <i style="margin-left: 55px;" class="fa-brands fa-youtube"></i>
//             </div>
//         </div>
// `;

//       parent.appendChild(div);

// }

// console.log(medList[0].Name)

//Main logic 2
var parent = document.getElementsByClassName("right")[0];
let medicines = null;

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        medicines = data;
        console.log(medicines);
        adddatatoHtml();
    });

let index = 1;

function adddatatoHtml() {
    medicines.forEach(med => {
        var div = document.createElement("div");
        div.className = "flip-box";
        div.innerHTML = ` 
            <div class="flip-box-inner">
                <div class="card">
                    <img src="./img/img${index}.jpg" alt="" srcset="">
                    <div class="scroll-container id="text-container-${index}">
                        <div class="scroll-content" id="text-content-${index}">
                            ${med.Name}
                        </div>
                    </div>
                    <hr id="hr">
                    <p>
                        <span id="span">$${med.price}</span>
                        <span> |</span>
                        <span style="color: green;"> ${med.mrp}</span>
                    </p>
                    <hr>
                    <hr>
                    <span style="margin-left: 20px;">Qtys</span>
                    <input class="input" type="number" name="" id="">
                    <a href="">Add to cart</a>
                </div>
                <div class="cardback">
                    <h2>INFO</h2>
                    <i class="fa-brands fa-square-facebook"></i>
                    <i style="margin-left: 30px;" class="fa-brands fa-square-instagram"></i>
                    <i style="margin-left: 55px;" class="fa-brands fa-youtube"></i>
                </div>
            </div>
        `;

        parent.appendChild(div);

        // Adding event listeners after element creation
        // const textContainer = document.getElementById(`text-container-${index}`);
        // const textContent = document.getElementById(`text-content-${index}`);

        // textContainer.addEventListener('mouseenter', () => {
        //     textContent.style.animationPlayState = 'running';
        // });

        // textContainer.addEventListener('mouseleave', () => {
        //     textContent.style.animationPlayState = 'paused';
        // });

        // if (textContent.scrollWidth > textContent.clientWidth) {
        //     textContent.classList.add("scroll-content");
        //     textContainer.classList.add("scroll-container");
        //     console.log("yes");
        // } else {
        //     textContent.classList.add("Noscroll");
        // }

        index++;
    });
}

