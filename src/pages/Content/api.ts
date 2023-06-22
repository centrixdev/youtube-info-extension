import { IChannel, IVideo } from '../../interfaces';
import { api_key } from './secret.json';
export async function getChannel(id: string) {
  const url = `https://youtube138.p.rapidapi.com/channel/details/?id=${id}&hl=en&gl=US`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': api_key as string,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result as unknown as IChannel;
  } catch (error) {
    console.error(error);
  }
}

export async function getVideo(id: string) {
  const url = `https://youtube138.p.rapidapi.com/video/details/?id=${id}&hl=en&gl=US`;
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': api_key as string,
      'X-RapidAPI-Host': 'youtube138.p.rapidapi.com',
    },
  };

  try {
    const response = await fetch(url, options);
    const result = await response.json();
    return result as unknown as IVideo;
  } catch (error) {
    console.error(error);
  }
}
