import { Box, HStack } from "@chakra-ui/react";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const sections = [
  {
    id: "book",
    label: "Book a table",
  },
]

function scrollTo(selector, yOffset = 0){
  const element = document.getElementById(selector);
  const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;

  window.scrollTo({top: y, behavior: 'smooth'});
}

const Header = () => {
  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
      scrollTo(id, -88);
  };

  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            {
              socials.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ margin: "0 8px", color: "white" }}
                >
                  <FontAwesomeIcon icon={social.icon} size="lg" />
                </a>
              ))
            }
          </nav>
          <nav>
            <HStack spacing={8}>
              {
                sections.map((section, index) => (
                  <a
                    key={index}
                    href={`#${section.id}`}
                    onClick={handleClick(section.id)}
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    {section.label}
                  </a>
                ))
              }
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
