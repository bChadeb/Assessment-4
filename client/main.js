const fortunes = ["Your wish will be granted", "There is always a way if you're commited", "Happy news is on its way to you", "Your many hidden talents will become obvious to those around you", "Your heart is a place to draw true happiness"]

const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addFortuneBtn = document.getElementById("addFortuneButton")
const fortuneInput = document.getElementById("newFortuneInput")
const deleteFortuneBtn = document.getElementById("deleteFortuneButton")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
    .then(res => {
        const data = res.data;
        alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
    .then(res => {
        const data = res.data
        alert(data)
    })
}

const moreFortunes = () => {
    const newFortune = fortuneInput.value.trim()
    if (newFortune){
        axios.post("http://localhost:4000/api/fortunes/", {fortune: newFortune})
        .then(res => {
            alert("Fortune has been added!")
            fortuneInput.value = ""
        })
        .catch(error => {
            console.error("failed to add fortune:", error)
        })
    } else {
        alert("please enter a fortune!")
    }
}

const deleteFortune = () => {
    if (fortunes.length > 0) {
        const randomIndex = Math.floor(Math.random() * fortunes.length)
        const fortuneToDelete = fortunes[randomIndex]
        
        axios.delete('http://localhost:4000/api/delete-fortune', { data: { fortune: fortuneToDelete } })
            .then(response => {
                console.log(response.data)
                fortunes.splice(randomIndex, 1)
                alert("Fortune deleted successfully!")
            })
            .catch(error => {
                console.error('Error deleting fortune:', error)
                alert("Failed to delete fortune. Please try again.")
            })
    } else {
        alert("No fortunes to delete!")
    }
}



fortuneBtn.addEventListener('click', getFortune)
complimentBtn.addEventListener('click', getCompliment)
addFortuneBtn.addEventListener('click', moreFortunes)
deleteFortuneBtn.addEventListener('click', deleteFortune)