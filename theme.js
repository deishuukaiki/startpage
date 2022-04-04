var quotes = [
    // hitagi
    '„Those who get fooled are partially at fault.”',
    '*to Araragi* „A creature like you having a brain residing in his skull...is already a miracle in and of itself.”',
    '*guilty voice* „Because of my carelessness Araragi-kun realized that his brain is slower than others.”',
    '„My abusive language is alchemized through 40 kg copper, 25 kg of zinc, 15 kg of nickel,<br>5 kg of ice that keeps my cool, and 97 kg of spite.”',
    // hanekawa
    '„I don’t know everything, I just know what I know.”',
    '„I don’t know everything. I don’t know anything.”',
    '„I don’t know everything, but everything burns.”',
    '„Someone saying that they are happy doesn’t necessarily mean that they are happy, right?”',
    // shinobu
    '„There’s no reason a fake can’t do what the real thing would.<br> And it’s possible for a fake to be more real than the real thing”',
    '„It’s difficult to change the world on your own, but twisting it a little might not be all that hard.”',
    '„It’s not good to expect too much, but you can’t do anything if you’re being overly pessimistic.<br>If you just wait thinking it’s useless, nothing will come of it.”',
    '„The sun is my enemy, but the moon has been good to me.”',
    // araragi
    '„You.... Could it be that you’re just an idiot?” *to Senjougahara*',
    '„The first requirement of being a hero isn’t being right. It’s being strong. That’s why the hero always wins.”',
    // oshino
    '„No one cares about Araragi-kun.”',
    '„If praying does not work, and words are ineffective... what’s left is to fight.”',
    '„People have to save themselves. One person saving another is impossible.”',
    // izuko
    '„I know everything. There’s nothing that I don’t know”',
    // ougi
    '„I don’t know anything. You’re the one that knows everything”',
]

function setTheme() {
    var random = Math.floor(Math.random()*quotes.length);
    document.getElementById('quoteDisplay').innerHTML = quotes[random];
    var mascot;
    if (random < 4) {
        setMascot("hitagi", 3);
    }
    else if (random < 8) {
        setMascot("hanekawa", 5);
    }
    else if (random < 12) {
        setMascot("shinobu", 3);
    }
    else if (random < 14) {
        setMascot("araragi", 1);
    }
    else if (random < 17) {
        setMascot("oshino", 2);
    }
    else if (random == 17) {
        setMascot("izuko", 1);
    }
    else if (random == 18) {
        setMascot("ougi", 1);
    }
}

function setMascot(mascot, amount) {
    var index = Math.floor(Math.random()*amount) + 1;
    var mascotSrc = ("url('img/" + mascot + index + ".png')")
    document.getElementById("main").style.backgroundImage = mascotSrc;
    console.log(mascotSrc)
}
