// program utk mengedit dan update pada to-do list
import React, {useState} from 'react'

export const EditTodoForm = ({editTodo, task}) => {
    const [value, setValue] = useState(task.task) // tast.task mendefinisikan value yang akan diedit

    // saat user klik tombol update Task maka akan dieksekusi fungsi dibawah ini
    const handleSubmit = (e) => {
        // prevent default action utk mencegah pengiriman data form scr tradisional (refresh halaman)
        e.preventDefault();
        // edit todo : utk mengupdate tugas yg sesuai 
        editTodo(value, task.id); // value: berisi tugas yg telah diedit; task.id: identifikasi unik dari tugas yg akan diedit
    }

  return (
    <form onSubmit={handleSubmit} className='TodoForm'> 
    {/* onSubmit={handleSubmit}: Menghubungkan fungsi handleSubmit */}
        <input type='text' className='todo-input' 
        value={value} placeholder='Update Task'
        onChange={(e) => setValue(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

// note : 
// (1) type='text': Menetapkan jenis input sebagai teks (input teks)
// (2) className='todo-input': Memberikan class CSS bernama "todo-input" untuk styling.
// (3) value={value}: Menghubungkan nilai input dengan nilai value dari state, sehingga nilai yang ditampilkan pada input selalu sesuai dengan nilai value pada state.
// (4) placeholder='Update Task': Menampilkan teks "Update Task" sebagai placeholder di dalam input untuk memberikan petunjuk tentang apa yang harus dimasukkan pengguna.
// (5) onChange={(e) => setValue(e.target.value)}: Menghubungkan fungsi anonim yang akan dipanggil setiap kali isi dari input berubah (terjadi perubahan). Ketika terjadi perubahan, nilai input akan diperbarui dalam state dengan nilai yang baru dimasukkan oleh pengguna melalui setValue.
