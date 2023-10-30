
import { useState } from 'react';
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { app } from '../firebase';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function CreateListing() {
  const { currentUser } = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [formData, setFormData] = useState({
    imageUrls: [],
    titre: '',
    description: '',
    categorie: '',
    prix: '',
    phone:'',
    region: '',
  


    
  });
  const [imageUploadError, setImageUploadError] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const[selectv,setSelected] = useState(false);
  console.log(formData);

const getSelectedValue=(e)=>{
  setSelected(e.target.value);
}

  const handleImageSubmit = (e) => {
    if (files.length > 0 && files.length + formData.imageUrls.length < 7) {
      setUploading(true);
      setImageUploadError(false);
      const promises = [];

      for (let i = 0; i < files.length; i++) {
        promises.push(storeImage(files[i]));
      }
      Promise.all(promises)
        .then((urls) => {
          setFormData({
            ...formData,
            imageUrls: formData.imageUrls.concat(urls),
          });
          setImageUploadError(false);
          setUploading(false);
        })
        .catch((err) => {
          setImageUploadError('Image upload failed (2 mb max per image)');
          setUploading(false);
        });
    } else {
      setImageUploadError('You can only upload 6 images per listing');
      setUploading(false);
    }
  };

  const storeImage = async (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const fileName = new Date().getTime() + file.name;
      const storageRef = ref(storage, fileName);
      const uploadTask = uploadBytesResumable(storageRef, file);
      uploadTask.on(
        'state_changed',
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${progress}% done`);
        },
        (error) => {
          reject(error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            resolve(downloadURL);
          });
        }
      );
    });
  };
// image  
  const handleRemoveImage = (index) => {
    setFormData({
      ...formData,
      imageUrls: formData.imageUrls.filter((_, i) => i !== index),
    });
  };

  const handleChange = (e) => {
    
    if (
      e.target.type === 'number' ||
      e.target.type === 'text' ||
      e.target.type === 'textarea'
    ) {
      setFormData({
        ...formData,
        [e.target.id]: e.target.value,
      });
    }
    
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (formData.imageUrls.length < 1)
        return setError('You must upload at least one image');
      
      setLoading(true);
      setError(false);
      const res = await fetch('/api/listing/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          userRef: currentUser._id,
        }),
      });
      const data = await res.json();
      setLoading(false);
      if (data.success === false) {
        setError(data.message);
      }
      navigate(`/listing/${data._id}`);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };




  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>
    <form  onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>

 <div className="">
                  Titre
                    <input  type="text" className=" border  p-3 rounded-lg w-full" id='titre'
                    maxLength='62'  minLength='7' required
                
                        value={formData.titre}
                       onChange={handleChange}
                       
                    />
                     Description <textarea  type="text" placeholder=''className=" border  p-3 rounded-lg w-full" id='description'
                     required
                        value={formData.description}
                      onChange={handleChange}
                       
                    />
                     <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Catégorie</label>
                    <select
                        id="categorie"
                        value={formData.selectv}
                        onChange={getSelectedValue}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    >
                        <option value="">Select Category</option>
                        <option value="voiture">Voitures</option>
                        <option value="immob">Immobilier</option>
                        <option value="meuble">Meubles</option>
                        <option value="moto">Moto</option>
                        <option value="multi">Multimédia</option>
                        <option value="meuble">Meubles</option>
                        <option value="vetm">Vetements</option>

                        {/* Add more categories as needed */}
                    </select>
                </div>
                Prix <input  type="numbre" placeholder=''className=" border  p-3 rounded-lg w-full"  id="prix"
                    required
                    value={formData.prix}
                    onChange={handleChange} 
                    />
             
                phone <input  type="numbre" placeholder=''className=" border  p-3 rounded-lg w-full"  id="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                     />
             
                    
               

                <div className='flex flex-col flex-1 gap-4'>
          <p className='font-semibold'>
            Images:
            <span className='font-normal text-gray-600 ml-2'>
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className='flex gap-4'>
            {/* fct image */}
            <input
              onChange={(e) => setFiles(e.target.files)}
              className='p-3 border border-gray-300 rounded w-full'
              type='file'
              id='images'
              accept='image/*'
              multiple
            />
   <button type='button'
   disabled={uploading}
    onClick={handleImageSubmit}
    className='p-3  text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>

    {uploading ? 'Uploading...' : 'Upload'}
   </button>
              
          
          
      
            <br/> 
         
            </div>
          <p className='text-red-700 text-sm'>
            {imageUploadError && imageUploadError}  </p>
          {formData.imageUrls.length > 0 &&
            formData.imageUrls.map((url, index) => (
              <div
                key={url}
                className='flex justify-between p-3 border items-center'
              >
                <img
                  src={url}
                  alt='listing image'
                  className='w-20 h-20 object-contain rounded-lg'
                />
                <button
                  type='button'
                  onClick={() => handleRemoveImage(index)}
                  className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                >
                  Delete
                </button>
              </div>
            ))}
               <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Lieu</label>
                    <select
                        name="region" id="region"
                        value={formData.selectv}
                        onChange={getSelectedValue}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    >
                        
                        <option value="">ariana</option>
                        <option value="">beja</option>
                        <option value="">ben arous</option>
                        <option value="">bizerte</option>
                        <option value="">gabes</option>
                        <option value="">gafsa</option>
                        <option value="">jendouba</option>
                        <option value="">kairouan</option>
                        <option value="">kasserine</option>
                        <option value="">kebili</option>
                        <option value="">Kef</option>
                        <option value="">mahdia</option>
                        <option value="">manouba</option>
                        <option value="">mednine</option>
                        <option value="">monastir</option>
                        <option value="">nabel</option>
                        <option value="">sfax</option>
                        <option value="">sidi bouzid</option>
                        <option value="">siliana</option>
                        <option value="">sousse</option>
                        <option value="">tataouine</option>
                        <option value="">tozeur</option>
                        <option value="">tunis</option>
                        <option value="">zaghouan</option>
                        

                        {/* Add more region as needed */}
                    </select>
                </div>  
            <button className='p-3 bg-slate-700 text-white rounded-lg
             uppercase hover:opacity-95 disabled:opacity-80'>
             { loading ? 'Creation..':'Create Listing'}
              </button>
{error && <p className='text-red-700  text-sm'>{error}</p>}
          </div>
              {/* end image*/}


                </div>
   
    </form>
    
    
    </main>
  )
}
