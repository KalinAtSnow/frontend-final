export function getRandomItems<T>(arr: T[], n: number): T[] {
    const result = new Set<T>();
    
    if (arr.length < n) {
      throw new Error("Not enough items in array");
    }

    while (result.size < n) {
      const randomIndex = Math.floor(Math.random() * arr.length);
      result.add(arr[randomIndex]);
    }
    
    return [...result];
  }

export function getCookie(name: string): string | null {
    const cookies = document.cookie.split('; ');
    for (let i = 0; i < cookies.length; i++) {
        const [cookieName, cookieValue] = cookies[i].split('=');
        if (cookieName === name) {
            return cookieValue;
        }
    }
    return null;
}