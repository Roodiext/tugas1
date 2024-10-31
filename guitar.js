let skewSetter = gsap.quckTo("img", "skewY"),
clamp = gsap.untils.clamp(-20, 20);

ScroollSmoother.create({
    wrapper: "#wrapper",
    content: "#content",
    smooth: 2,
    effects: true,
    onUpdate: self => skewSetter(clamp(self, getVelocity() / -50)),
    onStop: () => skewSetter(0)
})