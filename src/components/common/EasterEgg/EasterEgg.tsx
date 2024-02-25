import { AnimatedEasterEggPiece, EasterEggContainer } from './EasterEgg.style';

const EasterEgg = () => {
  const EasterEggPiecesData = [
    { left: '7%', rotate: '-40deg', delay: 182, duration: 1116 },
    { left: '14%', rotate: '4deg', delay: 161, duration: 1076 },
    { left: '21%', rotate: '-51deg', delay: 481, duration: 1103 },
    { left: '28%', rotate: '61deg', delay: 334, duration: 708 },
    { left: '35%', rotate: '-52deg', delay: 302, duration: 776 },
    { left: '42%', rotate: '38deg', delay: 180, duration: 1168 },
    { left: '49%', rotate: '11deg', delay: 395, duration: 1200 },
    { left: '56%', rotate: '49deg', delay: 14, duration: 887 },
    { left: '63%', rotate: '-72deg', delay: 149, duration: 805 },
    { left: '70%', rotate: '10deg', delay: 351, duration: 1059 },
    { left: '77%', rotate: '4deg', delay: 307, duration: 1132 },
    { left: '84%', rotate: '42deg', delay: 464, duration: 776 },
    { left: '91%', rotate: '-72deg', delay: 429, duration: 818 },
    { left: '98%', rotate: '67deg', delay: 334, duration: 987 },
  ];

  return (
    <EasterEggContainer>
      {EasterEggPiecesData.map((data, index) => (
        <AnimatedEasterEggPiece
          key={index}
          left={data.left}
          rotate={data.rotate}
          delay={data.delay}
          duration={data.duration}
        />
      ))}
    </EasterEggContainer>
  );
};

export default EasterEgg;
