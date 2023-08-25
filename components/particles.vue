<template>
    <div>
        <canvas id="canvas" width="384" height="256"/>
    </div>
</template>

<script lang="js" setup>
    const particleDist = 32;
    const mouse = {
        x: undefined,
        y: undefined,
        radius: 64,
    };
    let particles;

    onMounted(() => {
        if (process.client) {
            const canvas = document.querySelector("#canvas");
            const ctx = canvas.getContext("2d");

            class Particle {
                constructor(x, y) {
                    this.x = x;
                    this.y = y;
                    this.baseX = this.x;
                    this.baseY = this.y;
                    this.size = 2;
                }

                draw() {
                    ctx.fillStyle = "#323232";
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                    ctx.closePath();
                    ctx.fill();
                }

                update() {
                    const dx = mouse.x - this.x;
                    const dy = mouse.y - this.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    const force = (mouse.radius - dist) / mouse.radius;

                    if (dist < mouse.radius*2) {
                        const arcSize = this.size * 3 * (1 + force);
                        ctx.fillStyle = "#323232";
                        ctx.beginPath();
                        ctx.arc(this.x, this.y, arcSize, 0, Math.PI * 2);
                        ctx.closePath();
                        ctx.fill();
                    }
                }
            }

            function initParticles() {
                particles = [];

                for (let y = particleDist/2; y < canvas.height; y += particleDist) {
                    for (let x = particleDist/2; x < canvas.width; x += particleDist) {
                        particles.push(new Particle(x, y));
                    }
                }
            }

            function drawScene() {
                for (let i = 0; i < particles.length; i++) {
                    particles[i].update();
                    particles[i].draw();
                }
            }

            function animationLoop() {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                drawScene();
                requestAnimationFrame(animationLoop);
            }

            function mouseMove(event) {
                const rect = canvas.getBoundingClientRect();
                mouse.x = event.x - rect.left;
                mouse.y = event.y - rect.top;
            }

            function mouseOut() {
                mouse.x = undefined;
                mouse.y = undefined;
            }

            function init() {
                initParticles();
                animationLoop();
            }

            init();

            window.addEventListener("mousemove", mouseMove);
            window.addEventListener("mouseout", mouseOut);
        }
    });
</script>