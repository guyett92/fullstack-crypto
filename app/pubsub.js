const PubNub = require('pubnub');

const credentials = {
    publishKey: 'pub-c-10a27bbd-af33-4821-8c52-f565d3762d4c',
    subscribeKey: 'sub-c-43da1c6c-4a5e-11eb-9ec5-221b84410db5',
    secretKey: 'sec-c-NWZlNmNjOTQtOGMwZC00NTI1LWE2M2QtYmJjN2I5MGNiZmJm'
};

const CHANNELS = {
    TEST: 'TEST',
    BLOCKCHAIN: 'BLOCKCHAIN'
};

class PubSub {
    constructor({ blockchain }) {
        this.blockchain = blockchain;

        this.pubnub = new PubNub(credentials);

        this.pubnub.subscribe({ channels: Object.values(CHANNELS) });
        this.subscribeToChannels();

        this.pubnub.addListener(this.listener());
    }

    subscribeToChannels() {
        this.pubnub.subscribe({
            channels: [Object.values(CHANNELS)]
        });
    }

    broadcastChain() {
        this.publish({
            channel: CHANNELS.BLOCKCHAIN,
            message: JSON.stringify(this.blockchain.chain)
        });
    }

    listener() {
        return {
            message: messageObject => {
                const { channel, message } = messageObject;

                console.log(`Message received. Channel: ${channel}. Message: ${message}`);
                const parsedMessage = JSON.parse(message);

                if(channel === CHANNELS.BLOCKCHAIN) {
                    this.blockchain.replaceChain(parsedMessage);
                }
            }
        };
    }

    publish({ channel, message }) {
        // Can't unsubscribe because pubnub does not have a callback
        this.pubnub.publish({ channel, message });
    }
}

module.exports = PubSub;