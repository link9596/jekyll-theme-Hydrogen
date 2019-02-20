# encoding: utf-8

Gem::Specification.new do |s|
  s.name          = "Material Theme For Jekyll"
  s.version       = "1.0"
  s.license       = "CC0-1.0"
  s.authors       = ["Link"]
  s.email         = ["lk@atlinker.cn"]
  s.homepage      = "hydrogen.atlinker.cn"
  s.summary       = "Hydrogen,clean and quick response Theme For Jekyll, with your Customizable comment system "

  s.files         = `git ls-files -z`.split("\x0").select do |f|
    f.match(%r{^((_includes|_layouts|_sass|assets)/|(LICENSE|README|index|about|contact|404)((\.(txt|md|markdown)|$)))}i)
  end

  s.platform      = Gem::Platform::RUBY
  s.add_runtime_dependency "jekyll", "~> 3.3"
end
