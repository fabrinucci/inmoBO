import { AgentData, PropertyData } from '@/types';
import propertiesData from '@/api/properties.json';
import agentsData from '@/api/agents.json';

export const getAgents = async (): Promise<AgentData[]> => {
  try {
    const data: AgentData[] = agentsData.data;
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error}`);
  }
};

export const getProperties = async (): Promise<PropertyData[]> => {
  try {
    const data: PropertyData[] = propertiesData.data;
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error}`);
  }
};

export const getProperty = async ({ slug }: { slug: string }): Promise<PropertyData | null> => {
  try {
    const data: PropertyData[] = propertiesData.data;
    const property = data.find((property) => property.slug === slug);
    if (!property) return null;
    return property;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error}`);
  }
};

export const getAgent = async ({ agentId }: { agentId: number }): Promise<AgentData | null> => {
  try {
    const data: AgentData[] = agentsData.data;
    const agent = data.find((agent) => agent.agent_id === agentId);
    if (!agent) return null;
    return agent;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error}`);
  }
};
