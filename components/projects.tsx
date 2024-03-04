import React from 'react';
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
    Box,
  } from '@chakra-ui/react'


function Projects(props: any) {

    
    return (
        <div className="text-black bg-off-white">
            <Accordion>
                <AccordionItem>
                    <h1>
                        <AccordionButton>
                            <Box as="span" flex='1' textAlign='left'>
                                Section 1 title
                            </Box>
                        </AccordionButton>
                    </h1>
                    <AccordionPanel>
                        wasd            
                    </AccordionPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
}

export default Projects;