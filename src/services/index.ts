import { AgentData, PropertyData } from '@/types';

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
