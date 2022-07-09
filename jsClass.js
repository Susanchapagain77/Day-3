/*function Details(name, semester, faculty, shift, rollno, ...Further) {
    console.log(`name=${name} 
    semester=${semester}
    faculty=${faculty}
    shift=${shift}
    rollno=${rollno}
    other=${Further}`);
}
 Details("Abc", 4, "software", ["day", "morning"], [1, 2, 3, "noroll"], "pass", "fail", "dues remaining");*/

//Destructure()

/*function details({ name, roll }) {
    console.log(`name: ${name},roll:${roll}`);
}

let profile = {
    name: "Abc",
    location: "NCIT",
    College: "NCIT",
    roll: "21643",
    status: "Fail",
};
details(profile);*/

async function getDogLists() {
    await fetch("https://dog.ceo/api/breeds/list/all", {
            method: "GET",
        })
        .then((res) => {
            console.log(` Response is:'$res()`);
        })

    .catch((err) => console.log(`Error in api:$(err)`));
}

document.getElementById("Add").addEventListener("click", getDogLists());