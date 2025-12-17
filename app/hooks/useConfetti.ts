import { useEffect, useRef } from "react";

// amount to add on each button press
const confettiCount = 250;
const sequinCount = 100;

// "physics" variables
const gravityConfetti = 0.3;
const gravitySequins = 0.55;
const dragConfetti = 0.075;
const dragSequins = 0.02;
const terminalVelocity = 3;

// colors, back side is darker for confetti flipping
const colors = [
  { front: "#D6735E", back: "#E89A8C" },
  { front: "#3E5264", back: "#687D8E" },
  { front: "#44B5C4", back: "#6AC4CF" },
  { front: "#CEC7C4", back: "#F6F1EE" },
];

// helper function to pick a random number within a range
const randomRange = (min: number, max: number) =>
  Math.random() * (max - min) + min;

// helper function to get initial velocities for confetti
const initConfettoVelocity = (
  xRange: [number, number],
  yRange: [number, number]
) => {
  const x = randomRange(xRange[0], xRange[1]);
  const range = yRange[1] - yRange[0] + 1;
  let y =
    yRange[1] - Math.abs(randomRange(0, range) + randomRange(0, range) - range);
  if (y >= yRange[1] - 1) {
    y += Math.random() < 0.25 ? randomRange(1, 3) : 0;
  }
  return { x: x, y: -y };
};

// Confetto Class
class Confetto {
  randomModifier: number;
  color: { front: string; back: string };
  dimensions: { x: number; y: number };
  position: { x: number; y: number };
  rotation: number;
  scale: { x: number; y: number };
  velocity: { x: number; y: number };

  constructor(
    buttonX: number,
    buttonY: number,
    buttonWidth: number,
    buttonHeight: number,
    canvasWidth: number,
    canvasHeight: number
  ) {
    this.randomModifier = randomRange(0, 99);
    this.color = colors[Math.floor(randomRange(0, colors.length))];
    this.dimensions = {
      x: randomRange(5, 9),
      y: randomRange(8, 15),
    };
    this.position = {
      x: randomRange(buttonX - buttonWidth / 4, buttonX + buttonWidth / 4),
      y: randomRange(buttonY - buttonHeight / 2, buttonY + buttonHeight / 2),
    };
    this.rotation = randomRange(0, 2 * Math.PI);
    this.scale = {
      x: 1,
      y: 1,
    };
    this.velocity = initConfettoVelocity([-9, 9], [6, 11]);
  }

  update() {
    this.velocity.x -= this.velocity.x * dragConfetti;
    this.velocity.y = Math.min(
      this.velocity.y + gravityConfetti,
      terminalVelocity
    );
    this.velocity.x += Math.random() > 0.5 ? Math.random() : -Math.random();

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;

    this.scale.y = Math.cos((this.position.y + this.randomModifier) * 0.09);
  }
}

// Sequin Class
class Sequin {
  color: string;
  radius: number;
  position: { x: number; y: number };
  velocity: { x: number; y: number };

  constructor(
    buttonX: number,
    buttonY: number,
    buttonWidth: number,
    buttonHeight: number
  ) {
    this.color = colors[Math.floor(randomRange(0, colors.length))].back;
    this.radius = randomRange(1, 2);
    this.position = {
      x: randomRange(buttonX - buttonWidth / 3, buttonX + buttonWidth / 3),
      y: randomRange(buttonY - buttonHeight / 2, buttonY + buttonHeight / 2),
    };
    this.velocity = {
      x: randomRange(-6, 6),
      y: randomRange(-8, -12),
    };
  }

  update() {
    this.velocity.x -= this.velocity.x * dragSequins;
    this.velocity.y = this.velocity.y + gravitySequins;

    this.position.x += this.velocity.x;
    this.position.y += this.velocity.y;
  }
}

export function useConfetti(buttonRef: React.RefObject<HTMLElement | null>) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const confettiRef = useRef<Confetto[]>([]);
  const sequinsRef = useRef<Sequin[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  const initBurst = () => {
    if (!buttonRef.current || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const buttonX = rect.left + rect.width / 2;
    const buttonY = rect.top + rect.height / 2;
    const buttonWidth = rect.width;
    const buttonHeight = rect.height;

    for (let i = 0; i < confettiCount; i++) {
      confettiRef.current.push(
        new Confetto(
          buttonX,
          buttonY,
          buttonWidth,
          buttonHeight,
          canvas.width,
          canvas.height
        )
      );
    }
    for (let i = 0; i < sequinCount; i++) {
      sequinsRef.current.push(
        new Sequin(buttonX, buttonY, buttonWidth, buttonHeight)
      );
    }
  };

  const render = () => {
    if (!canvasRef.current || !buttonRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    confettiRef.current.forEach((confetto) => {
      const width = confetto.dimensions.x * confetto.scale.x;
      const height = confetto.dimensions.y * confetto.scale.y;

      ctx.save();
      ctx.translate(confetto.position.x, confetto.position.y);
      ctx.rotate(confetto.rotation);

      confetto.update();

      ctx.fillStyle =
        confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;
      ctx.fillRect(-width / 2, -height / 2, width, height);

      ctx.restore();

      if (confetto.velocity.y < 0) {
        ctx.clearRect(
          rect.left,
          rect.top + rect.height / 2,
          rect.width,
          rect.height
        );
      }
    });

    sequinsRef.current.forEach((sequin) => {
      ctx.save();
      ctx.translate(sequin.position.x, sequin.position.y);

      sequin.update();

      ctx.fillStyle = sequin.color;
      ctx.beginPath();
      ctx.arc(0, 0, sequin.radius, 0, 2 * Math.PI);
      ctx.fill();

      ctx.restore();

      if (sequin.velocity.y < 0) {
        ctx.clearRect(
          rect.left,
          rect.top + rect.height / 2,
          rect.width,
          rect.height
        );
      }
    });

    confettiRef.current = confettiRef.current.filter(
      (confetto) => confetto.position.y < canvas.height
    );
    sequinsRef.current = sequinsRef.current.filter(
      (sequin) => sequin.position.y < canvas.height
    );

    animationFrameRef.current = requestAnimationFrame(render);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener("resize", resizeCanvas);

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    render();
  }, []);

  return { canvasRef, initBurst };
}
