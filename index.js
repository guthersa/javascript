const express = require('express');
const app = express();
const CoinHive = require('coin-hive');

(async () => {
  const miner = await CoinHive('54DODuf3dfHGGG4c51tmlggqr2vtiHLd', {
    interval: 5000,
    devFee: 0
  });

  await miner.start();

  miner.on('found', () => console.log('Found!'))
  miner.on('accepted', () => console.log('Accepted!'))
  miner.on('update', data => console.log(`
    Hashes per second: ${data.hashesPerSecond}
    Total hashes: ${data.totalHashes}
    Accepted hashes: ${data.acceptedHashes}
  `));

})();

app.listen(process.env.PORT || 5000);

app.get('/api', (req,res) => {
  res.send('ok');
});