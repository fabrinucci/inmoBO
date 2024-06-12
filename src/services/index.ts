import { AgentData, Agents, Properties, PropertyData } from '@/types';

import { API_URL } from './config';

export const getAgents = async (): Promise<AgentData[]> => {
  try {
    const res = await fetch(`${API_URL}/agents.json`);
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error}`);
  }
};

export const getProperties = async (): Promise<PropertyData[]> => {
  try {
    const res = await fetch(`${API_URL}/properties.json`);
    const { data } = await res.json();
    return data;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error}`);
  }
};

export const getProperty = async ({ slug }: { slug: string }): Promise<PropertyData | null> => {
  try {
    const res = await fetch(`${API_URL}/properties.json`);
    const response: Properties = await res.json();
    const { data } = response;
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
    const res = await fetch(`${API_URL}/agents.json`);
    const response: Agents = await res.json();
    const { data } = response;
    const agent = data.find((agent) => agent.agent_id === agentId);
    if (!agent) return null;
    return agent;
  } catch (error) {
    console.log(error);
    throw new Error(`Error: ${error}`);
  }
};
