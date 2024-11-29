import { useEffect, useState } from "react";

const calculateTimeLeft = ({ target }) => {
  const targetDate = new Date(target);
  const difference = targetDate - new Date();
  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / (1000 * 60)) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
};

function CountdownTimer({ target, className }) {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft({ target }));
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    //   <div className="bg-green-100 p-4 rounded">
    //     <h3 className="text-lg font-bold">Time Left for Campaign</h3>
    //     <p className="text-green-600">{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m ${timeLeft.seconds}s`}</p>
    //   </div>
    <p
      className={className}
    >{`${timeLeft.days}d ${timeLeft.hours}h ${timeLeft.minutes}m`}</p>
  );
}

export default CountdownTimer;
