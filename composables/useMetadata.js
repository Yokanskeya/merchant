export const useMetadata = async () => {
    const metadata = useState('metadata', () => null);
    if (!metadata.value) {
      const response = await fetch('https://api.lanyard.rest/v1/users/474239882877730837');
      if (response.ok) {
        const data = await response.json();
        metadata.value = {
          status: data.data.kv.status
        };
      } else {
        console.error('Failed to fetch metadata:', response.statusText);
      }
    }
    return metadata;
  };