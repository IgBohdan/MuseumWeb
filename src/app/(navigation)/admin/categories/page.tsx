"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Plus, Search, Edit, Trash2 } from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { listOfNews } from "@/services/EmployeeService";

export default function Page() {
  const [exhibits, setExhibits] = useState([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    description: "",
    year: "",
    author: "",
    origin: "",
    material: "",
    image: null,
  });

  useEffect(() => {
    async function getAllNews() {
      try {
        const response = await listOfNews();
        return setExhibits(response.data);
      } catch (error) {
        console.error(error);
      }
    }
    getAllNews();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        formDataToSend.append(key, value);
      });

      const response = await fetch("http://localhost:3009/api/tempory-post", {
        method: "POST",
        body: formDataToSend,
      });

      if (response.ok) {
        const newExhibit = await response.json();
        alert(
          `Exhibit added successfully! ${JSON.stringify(newExhibit.formData)}`
        );
      } else {
        alert("Failed to add exhibit.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred while adding the exhibit.");
    }
  };

  const filteredExhibits =
    exhibits &&
    exhibits.filter(
      (exhibit) =>
        exhibit.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        exhibit?.category.toLowerCase().includes(searchTerm.toLowerCase())
    );

  const deleteExhibit = (id: number) => {
    setExhibits(exhibits.filter((exhibit) => exhibit.id !== id));
  };

  return (
    <div className="text-white">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Управління категоріями</h1>
        <Dialog>
          <DialogTrigger asChild>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center hover:bg-blue-600 transition-colors">
              <Plus className="mr-2" /> Додати категорію
            </button>
          </DialogTrigger>
          <DialogContent className="bg-[var(--maincolorback)] border-none">
            <DialogHeader>
              <DialogTitle>Додати категорію</DialogTitle>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <input
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Назва категорії"
                  className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                />
                <input
                  name="category"
                  value={formData.category}
                  onChange={handleInputChange}
                  placeholder="Категорія"
                  className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                />
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Опис"
                  className="bg-gray-800/50 border-none outline-none p-2 rounded-xl resize-none h-24"
                />
                <input
                  name="year"
                  type="number"
                  value={formData.year}
                  onChange={handleInputChange}
                  placeholder="Рік створення"
                  className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                />
                <input
                  name="author"
                  value={formData.author}
                  onChange={handleInputChange}
                  placeholder="Автор"
                  className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                />
                <input
                  name="origin"
                  value={formData.origin}
                  onChange={handleInputChange}
                  placeholder="Місце походження"
                  className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                />
                <input
                  name="material"
                  value={formData.material}
                  onChange={handleInputChange}
                  placeholder="Матеріал"
                  className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                />
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileChange}
                  className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                />
              </div>
              <DialogFooter>
                <button
                  type="submit"
                  className="bg-blue-500 px-4 py-2 rounded-lg"
                >
                  Зберегти
                </button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="bg-gray-600/25 p-6 rounded-lg shadow-md">
        <div className="flex mb-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Пошук категорій..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full p-2 pl-10 outline-none rounded-lg bg-gray-600"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 " />
          </div>
        </div>
        <Table>
          <TableCaption>A list of your recent invoices.</TableCaption>
          <TableHeader className="space-x-4 bg-tranparent">
            <TableRow className="gap-2 text-xl hover:bg-transparent border-none">
              <TableHead>
                <p className="rounded-xl p-2 m-1 bg-gray-600/25 hover:bg-gray-600/65 transition-all duration-150 ease-in-out">
                  Назва
                </p>
              </TableHead>
              <TableHead>
                <p className="rounded-xl p-2 m-1 bg-gray-600/25 hover:bg-gray-600/65 transition-all duration-150 ease-in-out">
                  Категорія
                </p>
              </TableHead>
              <TableHead>
                <p className="rounded-xl p-2 m-1 bg-gray-600/25 hover:bg-gray-600/65 transition-all duration-150 ease-in-out">
                  Дата
                </p>
              </TableHead>
              <TableHead>
                <p className="rounded-xl p-2 m-1 bg-gray-600/25 hover:bg-gray-600/65 transition-all duration-150 ease-in-out">
                  Дії
                </p>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredExhibits.map((exhibit, index) => (
              <TableRow
                key={index}
                className="rounded-xl border-none hover:bg-transparent"
              >
                <TableCell>
                  <p className="rounded-xl p-2 m-1 my-0 bg-gray-600/25 hover:bg-gray-600/45 transition-all duration-150 ease-in-out">
                    {exhibit.title}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="rounded-xl p-2 m-1 my-0 bg-gray-600/25 hover:bg-gray-600/45 transition-all duration-150 ease-in-out">
                    {exhibit.category}
                  </p>
                </TableCell>
                <TableCell>
                  <p className="rounded-xl p-2 m-1 my-0 bg-gray-600/25 hover:bg-gray-600/45 transition-all duration-150 ease-in-out">
                    {exhibit.date}
                  </p>
                </TableCell>
                <TableCell>
                  <div className="rounded-xl p-2 flex flex-wrap m-1 my-0 bg-gray-600/25 hover:bg-gray-600/45 transition-all duration-150 ease-in-out">
                    <Dialog>
                      <DialogTrigger asChild>
                        <button
                          // onClick={() => null}
                          className="text-blue-500 flex hover:text-blue-700 mr-6"
                        >
                          <Edit className="inline mr-1" size={18} /> Редагувати
                        </button>
                      </DialogTrigger>
                      <DialogContent className="bg-[var(--maincolorback)] border-none">
                        <DialogHeader>
                          <DialogTitle>Додати категорію</DialogTitle>
                        </DialogHeader>
                        <form onSubmit={handleSubmit}>
                          <div className="grid gap-4 py-4">
                            <input
                              name="title"
                              value={formData.title}
                              onChange={handleInputChange}
                              placeholder="Назва категорії"
                              className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                            />
                            <input
                              name="category"
                              value={formData.category}
                              onChange={handleInputChange}
                              placeholder="Категорія"
                              className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                            />
                            <textarea
                              name="description"
                              value={formData.description}
                              onChange={handleInputChange}
                              placeholder="Опис"
                              className="bg-gray-800/50 border-none outline-none p-2 rounded-xl resize-none h-24"
                            />
                            <input
                              name="year"
                              type="number"
                              value={formData.year}
                              onChange={handleInputChange}
                              placeholder="Рік створення"
                              className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                            />
                            <input
                              name="author"
                              value={formData.author}
                              onChange={handleInputChange}
                              placeholder="Автор"
                              className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                            />
                            <input
                              name="origin"
                              value={formData.origin}
                              onChange={handleInputChange}
                              placeholder="Місце походження"
                              className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                            />
                            <input
                              name="material"
                              value={formData.material}
                              onChange={handleInputChange}
                              placeholder="Матеріал"
                              className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                            />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleFileChange}
                              className="bg-gray-800/50 border-none outline-none p-2 rounded-xl"
                            />
                          </div>
                          <DialogFooter>
                            <button
                              type="submit"
                              className="bg-blue-500 px-4 py-2 rounded-lg"
                            >
                              Зберегти
                            </button>
                          </DialogFooter>
                        </form>
                      </DialogContent>
                    </Dialog>

                    <button
                      onClick={() => deleteExhibit(exhibit.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="inline mr-1" size={18} /> Видалити
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
