.PHONY: package-clean package clean

package-clean:
	rm -rf pkg/ jira-active-sprint-improver-*.zip

package: package-clean
	cp -r src/ pkg/
	zip -j -r jira-active-sprint-improver.zip pkg/
	rm -rf pkg/

clean: package-clean
