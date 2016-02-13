function extract (res, which) {
    var r = { };
    _.each (res [which + 's'], function (obj, i) {
        r [obj.id] = obj;
    });
    return r;
}

/**
 *
 * @param res
 */

function instrument (res) {
    var map = [ ];
    res.map = map;

    // Add indexes to the arrays so we can format the tables

    _.each (res, function (objs, key) {
        if (_.isArray (objs)) {
            _.each(objs, function (obj, i) {
                obj.index = i + 1;
            });
            map.push (key.substring (0, key.length - 1));
        }
    });

    // Map the objects by their id's so we can deference links

    var mapped =  { };
    res.mapped = mapped;

    _.each (map, function (which, i) {
        mapped [which] =  extract (res, which);
    });

    // Now map in the actual referenced objects where there are foreign keys

    _.each (res, function (objs, key) {
        if (_.isArray (objs)) {
            _.each(objs, function (obj, i) {
                _.each (obj, function (val, key) {
                    _.each (map, function (ref, j) {
                        if (key == ref + '_id') {
                            obj [ref] = mapped [ref][val];
                            if (! obj [ref]) {
                                console.log ("WARNING: Missing mapped [" + ref + "][" + val + "]");
                            }
                        }
                    });
                });
            });
        }
    });

    // Add display names for all the references

    //console.log (JSON.stringify (mapped, null, 2));
    return;
}

function getPlayers (success, failure) {
    $.ajax ("https://www.stattleship.com/football/nfl/players", {
        contentType: 'application/json',
        headers: {
            "Authorization": "Token token=87884e62c4c2d44dc7950b4350273b1a",
            "Accept": "application/vnd.stattleship.com; version=1"
        }
    }).done (success).fail (failure);
    return;
}


function getTeams (success, failure) {
    $.ajax ("https://www.stattleship.com/football/nfl/teams", {
        contentType: 'application/json',
        headers: {
            "Authorization": "Token token=87884e62c4c2d44dc7950b4350273b1a",
            "Accept": "application/vnd.stattleship.com; version=1"
        }
    }).done (success).fail (failure);
    return;
}


$.extend({
    getUrlVars: function () {
        var vars = {}, hash;
        //var hasPos = window.location.href.indexOf('#');
        var hasPos;
        var hashes = window.location.href.slice(
            window.location.href.indexOf('?') + 1, hasPos > 0 ? hasPos : window.location.href.length).split('&');
        for (var i = 0; i < hashes.length; i++) {
            hash = hashes[i].split('=');
            vars[hash[0]] = hash[1];
        }
        return vars;
    },
    getUrlVar: function (name) {
        var val = $.getUrlVars()[name];
        if (val) {
            return decodeURIComponent(val);
        } else {
            return val;
        }
    }
});
