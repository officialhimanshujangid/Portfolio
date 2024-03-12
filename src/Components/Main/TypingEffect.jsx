import { useEffect, useState } from "react";

const TypingEffect = () => {
  const texts = ["Frontend Developer", "React Developer"];
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [textIndex, setTextIndex] = useState(0);

  useEffect(() => {
    const typeSpeed = 70;
    const delayBetweenTexts = 1000;
    const deleteSpeed = 90;
    const currentTextIndex = textIndex % texts.length;
    const currentString = texts[currentTextIndex];
    let typingTimer;

    const handleTyping = () => {
      setCurrentText((prevText) => {
        const isDeletingText = isDeleting && prevText.length > 0;
        return isDeletingText
          ? prevText.slice(0, -1)
          : currentString.slice(0, prevText.length + 1);
      });

      typingTimer = setTimeout(
        handleTyping,
        isDeleting ? typeSpeed : deleteSpeed
      );
    };

    typingTimer = setTimeout(handleTyping, typeSpeed);

    if (currentText === currentString && !isDeleting) {
      clearTimeout(typingTimer);
      setTimeout(() => {
        setIsDeleting(true);
        setTimeout(() => {
          setIsDeleting(false);
          setTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, delayBetweenTexts);
      }, delayBetweenTexts);
    }

    return () => clearTimeout(typingTimer);
  }, [currentText, isDeleting, textIndex]);

  return <span>{currentText}</span>;
};

export default TypingEffect;
