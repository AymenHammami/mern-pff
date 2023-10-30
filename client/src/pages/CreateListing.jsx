import React from 'react'

export default function CreateListing() {
  return (
    <main className='p-3 max-w-4xl mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Create a Listing</h1>
    <form className='flex flex-col sm:flex-row gap-4'>

 <div className="">
                  Titre
                    <input  type="text" placeholder='Titre'className=" border  p-3 rounded-lg w-full" id='name'
                    maxLength='62'  minLength='10' required
                       // value={formData.titre}
                       // onChange={handleInputChange}
                       
                    />
                     Description <textarea  type="text" placeholder=''className=" border  p-3 rounded-lg w-full" id='description'
                     required
                       // value={formData.titre}
                       // onChange={handleInputChange}
                       
                    />
                     <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Catégorie</label>
                    <select
                        name="categorie"
                        //value={formData.categorie}
                        //onChange={handleInputChange}
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
               Prix <input  type="numbre" placeholder=''className=" border  p-3 rounded-lg w-full" id='prix'
                    maxLength='62'  minLength='10' required />


<div className="mb-4">
                    <label className="block text-sm font-medium text-gray-600">Lieu</label>
                    <select
                        name="Gouvernorat"
                        //value={formData.Gouvernorat}
                        //onChange={handleInputChange}
                        className="mt-1 p-2 border rounded w-full"
                        required
                    >
                        <option value=""></option>
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
                <div className='flex flex-col flex-1 gap-4'>
          <p className='font-semibold'>
            Images:
            <span className='font-normal text-gray-600 ml-2'>
              The first image will be the cover (max 6)
            </span>
          </p>
          <div className='flex gap-4'>
            <input
              onChange={(e) => setFiles(e.target.files)}
              className='p-3 border border-gray-300 rounded w-full'
              type='file'
              id='images'
              accept='image/*'
              multiple
            />
   <button className='p-3  text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'>Upload</button>
              
          
          
           
          
            <br/>
             
             
              
         
            </div>
          
            <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>Create Listing</button>

          </div>
              {/* end image*/}

                </div>
   
    </form>
    
    
    </main>
  )
}
