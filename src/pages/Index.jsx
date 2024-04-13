import React, { useState } from "react";
import { Box, Heading, Text, Input, Stack, Wrap, WrapItem, Avatar, Badge, Select, Container, Button } from "@chakra-ui/react";
import MessageModal from "../components/MessageModal";

const developers = [
  {
    id: 1,
    name: "John Doe",
    location: "New York",
    technologies: ["React", "Node.js", "TypeScript"],
    avatar: "https://images.unsplash.com/photo-1469833120660-1a218b53d28a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDI2NDc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 2,
    name: "Jane Smith",
    location: "London",
    technologies: ["Angular", "Python", "Django"],
    avatar: "https://images.unsplash.com/photo-1485217988980-11786ced9454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjY0NzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 3,
    name: "Mike Johnson",
    location: "San Francisco",
    technologies: ["Vue.js", "GraphQL", "MongoDB"],
    avatar: "https://images.unsplash.com/photo-1514543250559-83867827ecce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDI2NDc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 4,
    name: "Sarah Lee",
    location: "Toronto",
    technologies: ["React Native", "Firebase", "Swift"],
    avatar: "https://images.unsplash.com/photo-1516534775068-ba3e7458af70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwyfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjY0NzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 5,
    name: "David Chen",
    location: "Shanghai",
    technologies: ["Next.js", "Tailwind CSS", "Vercel"],
    avatar: "https://images.unsplash.com/photo-1508674861872-a51e06c50c9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDI2NDc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 6,
    name: "Emily Davis",
    location: "Berlin",
    technologies: ["Gatsby", "Contentful", "GraphQL"],
    avatar: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwzfHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjY0NzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 7,
    name: "Alex Patel",
    location: "Mumbai",
    technologies: ["Laravel", "PHP", "MySQL"],
    avatar: "https://images.unsplash.com/photo-1498758536662-35b82cd15e29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDI2NDc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 8,
    name: "Olivia Brown",
    location: "Sydney",
    technologies: ["Ruby on Rails", "PostgreSQL", "Heroku"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw0fHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjY0NzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 9,
    name: "Daniel Kim",
    location: "Seoul",
    technologies: ["Spring Boot", "Java", "AWS"],
    avatar: "https://images.unsplash.com/photo-1511932296-b2d3cb287b57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1fHxtYWxlJTIwZGV2ZWxvcGVyJTIwcG9ydHJhaXR8ZW58MHx8fHwxNzEzMDI2NDc1fDA&ixlib=rb-4.0.3&q=80&w=1080",
  },
  {
    id: 10,
    name: "Sophia Nguyen",
    location: "Ho Chi Minh City",
    technologies: ["Express.js", "MongoDB", "React"],
    avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHw1fHxmZW1hbGUlMjBkZXZlbG9wZXIlMjBwb3J0cmFpdHxlbnwwfHx8fDE3MTMwMjY0NzV8MA&ixlib=rb-4.0.3&q=80&w=1080",
  },
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedTech, setSelectedTech] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const filteredDevelopers = developers.filter((developer) => {
    const nameMatch = developer.name.toLowerCase().includes(searchTerm.toLowerCase());
    const techMatch = selectedTech === "" || developer.technologies.includes(selectedTech);
    const locationMatch = selectedLocation === "" || developer.location === selectedLocation;

    return nameMatch && techMatch && locationMatch;
  });

  const uniqueTechnologies = [...new Set(developers.flatMap((dev) => dev.technologies))];
  const uniqueLocations = [...new Set(developers.map((dev) => dev.location))];

  return (
    <Box>
      <Box bg="gray.100" py={20}>
        <Container maxW="container.lg">
          <Heading as="h1" size="2xl" mb={4}>
            Particles
          </Heading>
          <Text fontSize="xl" mb={8}>
            Discover and hire top software talent specializing in web technologies
          </Text>
          <Stack direction={["column", "row"]} spacing={4}>
            <Input placeholder="Search by name or technology" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
            <Select placeholder="Filter by technology" value={selectedTech} onChange={(e) => setSelectedTech(e.target.value)}>
              {uniqueTechnologies.map((tech) => (
                <option key={tech} value={tech}>
                  {tech}
                </option>
              ))}
            </Select>
            <Select placeholder="Filter by location" value={selectedLocation} onChange={(e) => setSelectedLocation(e.target.value)}>
              {uniqueLocations.map((location) => (
                <option key={location} value={location}>
                  {location}
                </option>
              ))}
            </Select>
          </Stack>
        </Container>
      </Box>
      <Container maxW="container.lg" my={8}>
        <Wrap spacing={8}>
          {filteredDevelopers.map((developer) => (
            <WrapItem key={developer.id}>
              <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" p={4}>
                <Avatar size="2xl" src={developer.avatar} mb={4} />
                <Heading as="h2" size="lg" mb={2}>
                  {developer.name}
                </Heading>
                <Text mb={2}>{developer.location}</Text>
                <Wrap mb={4}>
                  {developer.technologies.map((tech) => (
                    <WrapItem key={tech}>
                      <Badge colorScheme="blue">{tech}</Badge>
                    </WrapItem>
                  ))}
                </Wrap>
                <Button colorScheme="blue" mb={4}>
                  View Profile
                </Button>
                <MessageModal developerName={developer.name} />
              </Box>
            </WrapItem>
          ))}
        </Wrap>
      </Container>
    </Box>
  );
};

export default Index;
