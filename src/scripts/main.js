let myPet = {
    name: "Toby",
    species: "dog",
    nicknames: ["Tobes", "Tobester", "Toaster", "Puddles", "Pebbles"],
    age: 16,
    bark: function() {
        window.alert('WOOF!');
    },
    pant: function() {
        window.alert('HEH! HEH! HEH! HEH!');
    },
    growl: function() {
        window.alert('GURRRRRR');
    }
};

// myPet.bark();
// myPet.pant();
// myPet.growl();

myPet.favoriteToys = [];
myPet.play = function(toy) {
    const likesToy = true;
    if (likesToy) {
        this.favoriteToys.push(toy);
    }
};
myPet.play("stuffed animal");
console.log(myPet.favoriteToys);