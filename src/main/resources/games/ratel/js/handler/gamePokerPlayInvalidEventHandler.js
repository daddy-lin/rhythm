;(function(window, Utils, Handler, ClientEventCodes, ServerEventCodes, Poker) {
    'use strict';

    function GamePokerPlayInvalidEventHandler() {
        this.code = ClientEventCodes.CODE_GAME_POKER_PLAY_INVALID;
    }

    Utils.extend(GamePokerPlayInvalidEventHandler, Handler);

    GamePokerPlayInvalidEventHandler.prototype.handle = function(client, panel, clientTransferData) {
        panel.append("牌型不符合规则。");

        if (client.getLastPokers() != null) {
            panel.append(Utils.format("{}[{}] 出牌了： ", client.getLastSellClientNickname(), client.getLastSellClientType()));
            panel.append(Poker.toString(client.getLastPokers()));
        }

        client.send(ServerEventCodes.CODE_GAME_POKER_PLAY_REDIRECT, null, null);
    };

    if (!window._handlers_) {
        window._handlers_ = [];
    }
    window._handlers_.push(new GamePokerPlayInvalidEventHandler());
} (this, this.Utils, this.Handler, this.ClientEventCodes, this.ServerEventCodes, this.Poker));
