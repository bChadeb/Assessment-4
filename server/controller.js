const fortunes = ["Your wish will be granted", "There is always a way if you're commited", "Happy news is on its way to you", "Your many hidden talents will become obvious to those around you", "Your heart is a place to draw true happiness"]

module.exports = {
    
    
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
        
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        
        res.status(200).send(randomCompliment);
    },
    
    getFortune: (req, res) => {
        
        let randomIndex = Math.floor(Math.random() * fortunes.length)
        let randomFortune = fortunes[randomIndex]

        res.status(200).send(randomFortune)
    },

    moreFortunes: (req, res) => {
        const newFortune = req.body.fortune
        if (newFortune) {
            fortunes.push(newFortune)
            res.status(200).send(newFortune)
        } 
    },

    deleteFortune: (req, res) => {
        if (fortunes.length > 0) {
            const randomIndex = Math.floor(Math.random() * fortunes.length)
            const deletedFortune = fortunes[randomIndex] 
            fortunes.splice(randomIndex, 1)
            res.status(200).send(deletedFortune)
        }  else {
            res.status(400).send()
        }
    }

}
