var makePulseDancer = function(top, left, timeBetweenSteps) {

  Makedancer.call(this,top, left, timeBetweenSteps);
  this.$node.find('img').css({'transition': timeBetweenSteps / 1000 + 's'});

};

makePulseDancer.prototype = Object.create(Makedancer.prototype);
makePulseDancer.prototype.constructor = makePulseDancer;

makePulseDancer.prototype.step = function() {

  Makedancer.prototype.step.call(this);
  console.log(this.$node);
  this.$node.find('img').toggleClass("pulsate1");

};