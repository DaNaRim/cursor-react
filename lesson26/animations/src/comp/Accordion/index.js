import {AnimatePresence} from "framer-motion"
import React, {useState} from "react"
import {AccordionContainer, AccordionContent, AccordionHeader} from "./styles"

const variants = {
  hidden: {
    opacity: 0,
    height: 0,
    transition: {duration: 0.3, ease: "easeInOut"}
  },
  visible: {
    opacity: 1,
    height: "auto",
    transition: {duration: 0.3, ease: "easeInOut"}
  }
}

const Accordion = ({header, children, defaultOpen = false}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen)
  return (
    <AccordionContainer>
      <AccordionHeader onClick={() => setIsOpen(p => !p)}>
        {header}
      </AccordionHeader>
      <AnimatePresence>
        {isOpen
          ? (
            <AccordionContent variants={variants}
                              initial="hidden"
                              exit="hidden"
                              animate="visible">
              {children}
            </AccordionContent>)
          : null}
      </AnimatePresence>
    </AccordionContainer>
  )
}

export default Accordion
