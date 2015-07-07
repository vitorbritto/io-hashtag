(function testHash(match) {

    var hash  = window.location.hash,
        match = hash.match(/^#?(.*)$/)[1];

    if (match) {
        console.log('I found a hashtag! =]');
        return match;
    } else {
        console.error('Oops! No hashtag in here. =/');
    }



}(window.location.href));
