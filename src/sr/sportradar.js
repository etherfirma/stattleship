SR = {
    apiKey: "k6a43yyq7wbtftzz2ucr5d97",
    apiHost: 'http://localhost:8000',

    hello: function () {
        alert ('hi');
    },

    fail: function (res) {
        console.log ('fail: ' + res);
        alert (JSON.stringify (res, null, 2));
        return;
    },

    getStandings: function (success, fail, opts) {
        var opts = opts || { };
        var accessLevel = opts.accessLevel || 'ot';
        var version = opts.version || 1;
        var format = opts.format || 'json';
        var year = opts.year || 2015;

        var url = this.apiHost + '/nfl-' + accessLevel + version + '/seasontd/' + year + '/standings.' + format;
        url += '?api_key=' + this.apiKey;

        $.ajax (url)
            .success (success)
            .fail (fail || this.fail);

        return;
    },

    getTeamProfile: function (success, fail, opts) {
        var opts = opts || { };
        var accessLevel = opts.accessLevel || 'ot';
        var version = opts.version || 1;
        var format = opts.format || 'json';
        var team = opts.team;

        var url = this.apiHost + '/nfl-' + accessLevel + version + '/teams/' + team + '/profile.' + format;
        url += '?api_key=' + this.apiKey;

        $.ajax (url)
            .success (success)
            .fail (fail || this.fail);

        return;
    },

    getLeagueHierarchy: function (success, fail, opts) {
        var opts = opts || { };
        var accessLevel = opts.accessLevel || 'ot';
        var version = opts.version || 1;
        var format = opts.format || 'json';

        var url = this.apiHost + '/nfl-' + accessLevel + version + '/league/hierarchy.' + format;
        url += '?api_key=' + this.apiKey;

        $.ajax (url)
            .success (success)
            .fail (fail || this.fail);

        return;
    },

    getPlayerProfile: function (success, fail, opts) {
        var opts = opts || { };
        var accessLevel = opts.accessLevel || 'ot';
        var version = opts.version || 1;
        var format = opts.format || 'json';
        var player = opts.player;

        var url = this.apiHost + '/nfl-' + accessLevel + version + '/players/' + player + '/profile.' + format;
        url += '?api_key=' + this.apiKey;

        $.ajax (url)
            .success (success)
            .fail (fail || this.fail);

        return;
    },

    getSchedule: function (success, fail, opts) {
        var opts = opts || { };
        var accessLevel = opts.accessLevel || 'ot';
        var version = opts.version || 1;
        var year = opts.year || 2015;
        var season = opts.season || 'reg';
        var format = opts.format || 'json';

        var url = this.apiHost + '/nfl-' + accessLevel + version + '/games/' + year + '/' + season + '/' + 'schedule.' + format;
        url += '?api_key=' + this.apiKey;

        $.ajax (url)
            .success (success)
            .fail (fail || this.fail);
    },

    getGameBoxscore: function (success, fail, opts) {
        var opts = opts || { };
        var accessLevel = opts.accessLevel || 'ot';
        var version = opts.version || 1;
        var format = opts.format || 'json';
        var game = opts.game;

        var url = this.apiHost + '/nfl-' + accessLevel + version + '/games/' + game + '/boxscore.' + format;
        url += '?api_key=' + this.apiKey;

        $.ajax (url)
            .success (success)
            .fail (fail || this.fail);

        return;
    },

    getGamePlayByPlay: function (success, fail, opts) {
        var opts = opts || { };
        var accessLevel = opts.accessLevel || 'ot';
        var version = opts.version || 1;
        var format = opts.format || 'json';
        var game = opts.game;

        var url = this.apiHost + '/nfl-' + accessLevel + version + '/games/' + game + '/pbp.' + format;
        url += '?api_key=' + this.apiKey;

        $.ajax (url)
            .success (success)
            .fail (fail || this.fail);

        return;
    },

    getGameStatistics: function (success, fail, opts) {
        var opts = opts || { };
        var accessLevel = opts.accessLevel || 'ot';
        var version = opts.version || 1;
        var format = opts.format || 'json';
        var game = opts.game;

        var url = this.apiHost + '/nfl-' + accessLevel + version + '/games/' + game + '/statistics.' + format;
        url += '?api_key=' + this.apiKey;

        $.ajax (url)
            .success (success)
            .fail (fail || this.fail);

        return;
    },
    getGameRoster: function (success, fail, opts) {
        var opts = opts || { };
        var accessLevel = opts.accessLevel || 'ot';
        var version = opts.version || 1;
        var format = opts.format || 'json';
        var game = opts.game;

        var url = this.apiHost + '/nfl-' + accessLevel + version + '/games/' + game + '/roster.' + format;
        url += '?api_key=' + this.apiKey;

        $.ajax (url)
            .success (success)
            .fail (fail || this.fail);

        return;
    },

};

// EOF
