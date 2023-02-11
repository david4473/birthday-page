let confetti = new Confetti("demo");

// Edit given parameters
confetti.setCount(275);
confetti.setSize(1);
confetti.setPower(25);
confetti.setFade(false);
confetti.destroyTarget(true);

gsap.set(".image", { xPercent: -50, yPercent: -50 });

const imgs = gsap.utils.toArray(".image");

const next = 3; // time to change
const fade = 1.5; // fade time

//only for the first
gsap.set(imgs[0], { autoAlpha: 1 });

const crossFade = () => {
  const action = gsap
    .timeline()
    .to(imgs[0], { autoAlpha: 0, duration: fade })
    .to(imgs[1], { autoAlpha: 1, duration: fade }, 0);

  imgs.push(imgs.shift());
  // start endless run
  gsap.delayedCall(next, crossFade);
};

// start the crossfade after next = 3 sec
gsap.delayedCall(next, crossFade);
