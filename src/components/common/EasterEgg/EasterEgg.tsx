import { EasterEggPiecesData } from './EasterEgg.const';
import { AnimatedEasterEggPiece, EasterEggContainer } from './EasterEgg.style';

const EasterEgg = () => {
  return (
    <EasterEggContainer>
      {EasterEggPiecesData.map((piece, index) => (
        <AnimatedEasterEggPiece
          key={index}
          $left={piece.left}
          $rotate={piece.rotate}
          $delay={piece.delay}
          $duration={piece.duration}
        />
      ))}
    </EasterEggContainer>
  );
};

export default EasterEgg;
