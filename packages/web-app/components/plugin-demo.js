import { Camera } from '@capacitor/camera';

export function PluginDemo() {
  return (
    <div>
      <button onClick={async () => {
        const photo = await Camera.getPhoto({
          quality: 90,
          resultType: "uri"
        });
        console.log(photo);
      }}>
        Take Picture
      </button>
    </div>
  )
}